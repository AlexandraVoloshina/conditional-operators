var age = prompt("Сколько лет?");
age= +age;

if (10<age && age< 14) {
	alert(age + " лет");
}
	else if (age%10 == 2 || age%10 == 3 || age%10 == 4) {
		alert(age + " года");
	} 
	else if (age%10 == 1)
				{
					alert(age + " год");
				} 

					else {
							alert(age + " лет");
				         }
