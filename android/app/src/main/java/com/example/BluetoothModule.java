package com.example;

import static androidx.core.app.ActivityCompat.startActivityForResult;

import android.Manifest;
import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.Set;

public class BluetoothModule extends ReactContextBaseJavaModule {
    private Context myContext;
    private BluetoothAdapter bluetoothAdapter;
    private Set<BluetoothDevice> pairedDevices;

    BluetoothModule(ReactApplicationContext context) {
        super(context);
        this.myContext = context;
        this.bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

    }

    @NonNull
    @Override
    public String getName() {
        return "BluetoohModule";
    }

    @ReactMethod()
    public void enableBluetooth(Promise promise) {
        if (ActivityCompat.checkSelfPermission(myContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        if (!bluetoothAdapter.isEnabled()) {
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivityForResult(enableBtIntent, 0);
        }
        promise.resolve(null);
    }

    @ReactMethod()
    public void disableBluetooth(Promise promise) {
        if (ActivityCompat.checkSelfPermission(myContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        this.bluetoothAdapter.disable();
        promise.resolve(null);
    }

    @ReactMethod()
    public void getStatusBluetooth(Promise promise) {
        promise.resolve(this.bluetoothAdapter.isEnabled());
    }

    @ReactMethod()
    public void list(Promise promise) {

        if (ActivityCompat.checkSelfPermission(this.myContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
         //   promise.resolve("Fail");
         //   return;
        }

        pairedDevices = this.bluetoothAdapter.getBondedDevices();
        String content="";
        for (BluetoothDevice bt : pairedDevices) {
           content=content+bt.getName()+"%%%"+bt.getAddress()+"_!!_";
        }
        promise.resolve(content);
    }

}
