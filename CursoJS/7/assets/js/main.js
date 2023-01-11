function main(){
    function getWeekDay(date){
        const weekDay = date.getDay()
        let day;
        
        switch(weekDay){
            case 0:
                day = 'Domingo'
                break
            case 1:
                day = 'Segunda feira'
                break
            case 2:
                day = 'Terça-feira'
                break
            case 3:
                day = 'Quarta-feira'
                break
            case 4:
                day = 'Quinta-feira'
                break
            case 5:
                day = 'Sexta-feira'
                break
            case 6:
                day = 'Sábado'
                break
        }
        return day;
    }
    function getMonth(date){
        const month = date.getMonth()
        let monthName;
        
        switch(month){
            case 0:
                monthName = 'Janeiro'
                break
            case 1:
                monthName = 'Fevereiro'
                break
            case 2:
                monthName = 'Março'
                break
            case 3:
                monthName = 'Abriu'
                break
            case 4:
                monthName = 'Maio'
                break
            case 5:
                monthName = 'Junho'
                break
            case 6:
                monthName = 'Julho'
                break
            case 7:
                monthName = 'Agosto'
                break
            case 8:
                monthName = 'Setembro'
                break
            case 9:
                monthName = 'Outubro'
                break
            case 10:
                monthName = 'Novembro'
                break
            case 11:
                monthName = 'Dezembro'
                break
        }
        return monthName;
    }
    function getYearFormated(date){
        let year;
        const y = date.getYear().toString()
        year = `${20}${y.slice(1)}`
        return year
    }
    function setMensage(day, monthName, year, date){
        const h1 = document.createElement('h1')
        const section = document.querySelector(".container")
        h1.innerHTML = `${day}, ${date.getDate()} de ${monthName} de ${year} ${date.getHours()}:${date.getMinutes()}`
        section.appendChild(h1)
    }

    const date = new Date()

    const year = getYearFormated(date) 
    const day = getWeekDay(date)
    const monthName = getMonth(date)
    
    setMensage(day, monthName, year,date)

}
main()