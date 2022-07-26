class BirthdayService {
    constructor (options) {
        this.now = options.now
        this.funcResolve = options.funcResolve
        this.funcReject = options.funcReject
    }

    howLongToMyBirthd(date) {

      const pro = new Promise((resolve) => {
             setTimeout(() => {
                 
              let dayBirthday = new Date(date)
              let difetime = +this.now - +dayBirthday
              const difDay = Math.round(difetime/(1000*60*60*24))
              
              resolve(difDay)
             },100)
          })
      
    pro.then(difDay => {
      return new Promise((reject) => {
          if(isNaN(difDay)) {
             reject()
          } else if (difDay < 182) {
              console.log(`Soon...Please, wait just ${difDay} day/s`)
          } else if (difDay > 182) {
              console.log(`Oh, you have celebrated it ${difDay} day/s ago, don't you remember?`)
          }
  
      },100)
  })
  .catch(console.error('Wrong argument!'))
 
}
}

const birthday = new BirthdayService({
    now: new Date()     
})

birthday.howLongToMyBirthd('06.27.2021');