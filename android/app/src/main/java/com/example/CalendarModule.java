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

public class CalendarModule extends ReactContextBaseJavaModule {
    private Context myContext;
    private BluetoothAdapter bluetoothAdapter;
    private Set<BluetoothDevice> pairedDevices;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        this.myContext = context;
        this.bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod()
    public void enableBluetooth(Promise promise) {
        if (ActivityCompat.checkSelfPermission(myContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        this.bluetoothAdapter.enable();
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
        promise.resolve(this.bluetoothAdapter.isEnabled() ? "On" : "Off");
    }

    @ReactMethod()
    public void list(Promise promise) {

        if (ActivityCompat.checkSelfPermission(this.myContext, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
         //   promise.resolve("Fail");
         //   return;
        }

        pairedDevices = this.bluetoothAdapter.getBondedDevices();
        ArrayList<String> list = new ArrayList<String>();
        for (BluetoothDevice bt : pairedDevices) {
            list.add(bt.getName());
        }
        promise.resolve(list.toString());
    }

}
