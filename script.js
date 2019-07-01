var age = +prompt("Сколько лет?");

/*if (10<age && age< 14) {
	alert(age + " лет");
}*/
if (!(10<age && age< 15 || 110<age && age< 115) && (age%10 == 2 || age%10 == 3 || age%10 == 4)) {
		alert(age + " года");
	} 
	else if (age%10 == 1 && age!=11 && age!=111)
				{
					alert(age + " год");
				} 

					else {
							alert(age + " лет");
}