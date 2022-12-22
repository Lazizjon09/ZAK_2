const Telegram = require("telegram-notify")

let notify = new Telegram({
  token: "5957631195:AAFLM2vtvxXoD1x-S-nTHT_66VKLORtd92w",
  chatId: "-1001816535916"
})

export default async function  handler(req, res) {
  console.log(req, res)
  if (req.method == "POST") {
  return  await notify.send(
      `     
  у вас новая заявка
  
👤Имя: ${req.body.name}
📞Номер: ${req.body.phone_number} 
💌Комментарий: ${req.body.email}
❓Комментарий: ${req.body.question}

📃Комментарий: ${req.body.descriptions}
        `,
        {notify}
    )
  } else {
    console.log("null")
  }
}