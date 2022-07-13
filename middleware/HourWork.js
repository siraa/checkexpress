

const HourWork = (req,res,next) => {
 
    let date=new Date()
    let days = date.getDay();

    let hours =date.getHours()


    if(days==0||dasy==6||hours<9||hours>17){
        res.send(" work time ")
    }
    else {
        next();
    }
}

module.exports= HourWork ; 