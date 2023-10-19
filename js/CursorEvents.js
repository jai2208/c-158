AFrame.registerComponent("cursor-listener",{
     schema:{
        selectedItemId:{default:"",type:"string"}
     },

     init: function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
     },

     handlePlaceListState: function(){
        const id = this.el.getAttribute("id")
        const placeId = ["taj-mahal","budapest","new-york-city","effiel-tower"]

        if(placeId.includes(id)){
            const placeContainer = document.querySelector(`#places-container`)
            placeContainer.setAttribute("cursor-listener",{selectedItemId:id});
            this.el.setAttribute("material",{color:"green", opacity:1})
        }
     },

     handleMouseEnterEvent: function(){
        this.el.addEventListener('mouseenter',()=>{
            this.handlePlaceListState()
        })
     },
     

     handleMouseLeaveEvent: function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemId} = this.data
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id===selectedItemId){
                    el.setAttribute("material", {color:"red",opacity:1})
                }
            }
        })
     }

     
})
