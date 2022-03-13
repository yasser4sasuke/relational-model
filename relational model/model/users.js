const mongoose = require('mongoose');

const PostModel = mongoose.model(

    {
        data_hotel : [ 
            
            {
                info_hotel : [
                    {
                        hotel_id : {
                            type : id,
                            require : true 
                        },

                        hotel_name : {
                            type : Name,
                            require : true
                        },
                    }
                ],


                info_Room : [ 
                    {
                        Room_id : {
                            category_id:id ,
                            require : true
                        },

                        Floor :{
                            category_Name:Name,
                            Price:Numbers,
                            Beds_Numbers:Numbers,
                            require : true
                        },

                    }
                ],


                info_Employee : [
                    {
                        Employee_id : {
                            type : id,
                            require : true
                        },

                        Employee_Name : {
                            type : Name,
                            require : true
                        },

                        Employee_Speciality: {
                            type : String,
                            require : true
                        }
                    }
                ],

            }
        ]

    },
)

module.exports = PostModel;