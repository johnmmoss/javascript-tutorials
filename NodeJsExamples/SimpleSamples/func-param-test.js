

let hello = (x , y, z) => 
{
	console.log(x + y + z);
}


// Less paramters are ignored
hello("1");
hello("1", " biscuit ");

// Extra parmeters are also ignored
hello("1", " biscuit ", "!!!", 0);
