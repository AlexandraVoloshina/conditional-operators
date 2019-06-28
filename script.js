var age = prompt("Сколько лет?");
age= +age;

if (1 < age && age < 5 
	|| 21 < age && age < 25
	|| 31 < age && age < 35
	|| 41 < age && age < 45
	|| 51 < age && age < 55
	|| 61 < age && age < 65
	|| 71 < age && age < 75
	|| 81 < age && age < 85
	|| 91 < age && age < 95
	|| 101 < age && age < 105
	|| 111 < age && age < 115
	|| 121 < age && age < 125
	|| 131 < age && age < 135
	|| 141 < age && age < 145) {
	alert(age + " года");
} 
else if (age%10 == 1)
			{
				alert(age + " год");
			} 

				else {
						alert(age + " лет");
			         }
