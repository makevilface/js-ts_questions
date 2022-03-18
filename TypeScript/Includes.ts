//Реализовать функцию Array.includes из JavaScript в системе типов TypeScript.
//Этот тип принимает два тип параметра.
//Результатом должно быть либо true, либо false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>;

type Includes<T extends unknown[], K> = K extends T[number] ? true : false;
