let data = {
    bill: [275,40,430]
}

for(let i=0;i<data.bill.length;i++) {
    let tip = data.bill[i] >=50 && data.bill[i] <= 300 ? data.bill[i]*0.15 : data.bill[i]*0.2;
    console.log(`The bill was $${data.bill[i]}, the tip was $${tip}, and the total value $${data.bill[i]+tip}`);
}