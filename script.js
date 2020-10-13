const Apps ={
    start: function(){
        const btn = document.querySelector('.add_btn')
        btn.addEventListener('click',this.addRecord)
    },
    addRecord: function(){
        const result = UIController.getInputFromUI()
        UIController.addRecordToTable(result)
    },
}
App.start();
const UIController = {
    getInputFromUI: function(){
        
    }
    
}

