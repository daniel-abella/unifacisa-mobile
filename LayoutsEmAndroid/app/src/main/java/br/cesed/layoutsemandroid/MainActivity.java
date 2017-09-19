package br.cesed.layoutsemandroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity implements View.OnClickListener {

	//Declaramos los 5 botones
	Button btnLinear;
	Button btnFrame;
	Button btnRelative;
	Button btnTable;
	Button btnGrid;

	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnFrame = (Button) findViewById(R.id.btnFrame);
        btnGrid = (Button) findViewById(R.id.btnGrid);
        btnRelative = (Button) findViewById(R.id.btnRelative);
        btnTable = (Button) findViewById(R.id.btnTable);
        btnLinear = (Button) findViewById(R.id.btnLinear);

        btnFrame.setOnClickListener(this);
        btnGrid.setOnClickListener(this);
        btnRelative.setOnClickListener(this);
        btnTable.setOnClickListener(this);
        btnLinear.setOnClickListener(this);
    }

    //Metodo onclick
	@Override
	public void onClick(View v) {

        if(v == btnFrame) {
            startActivity(new Intent(this, FrameLayout.class));
        } else if(v == btnGrid) {
            startActivity(new Intent(this, GridLayout.class));
        } else if(v == btnRelative) {
            startActivity(new Intent(this, RelativeLayout.class));
        } else if(v == btnTable) {
            startActivity(new Intent(this, TableLayout.class));
        } else if(v == btnLinear) {
            startActivity(new Intent(this, LinearLayout.class));
        }

	}
    
}
