import { useState } from "react";



export interface TemplateData {
    DataId?:number;
    DataName?:string;
}

interface TemplateSets {
    ExcerciseId: number;
    id: number;
    set: number;
    reps: number;
    weight: number;
}



interface CurrentData {
    TemplateID?:number;
    NameTemplate?:string;
    TemplateData?:TemplateData[];
    TemplateSets?:TemplateSets[];
    
}


let Currentid = 0;







let currentData: CurrentData[]=[
    {
        TemplateID:1,
        NameTemplate:"Push Day",
        TemplateData:[
            {DataId:1,DataName:'Bench press'},
            {DataId:2,DataName:'Incline DB bench press'},
            {DataId:3,DataName:'Cable chest flies'},
            {DataId:4,DataName:'Assisted Dips'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },


    {
        TemplateID:2,
        NameTemplate:"Pull Day",
        TemplateData:[
            {DataId:1,DataName:'Deadlift'},
            {DataId:2,DataName:'Lat pulldowns'},
            {DataId:3,DataName:'Machine Rows'},
            {DataId:4,DataName:'Assisted Pull ups'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },

    {
        TemplateID:3,
        NameTemplate:"Leg Day",
        TemplateData:[
            {DataId:1,DataName:'Back Squat'},
            {DataId:2,DataName:'Bulgarian Squats'},
            {DataId:3,DataName:'Leg raises'},
            {DataId:4,DataName:'Leg Curl'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },


    {
        TemplateID:4,
        NameTemplate:"Push Day Default Template",
        TemplateData:[
            {DataId:1,DataName:'Incline Barbell Bench press'},
            {DataId:2,DataName:'Decline Barbell bench press'},
            {DataId:3,DataName:'Tricep pushdowns'},
            {DataId:4,DataName:'Skull crushers'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },


    {
        TemplateID:5,
        NameTemplate:"Pull Day Default Template",
        TemplateData:[
            {DataId:1,DataName:'Dumbell rows'},
            {DataId:2,DataName:'Barbell rows'},
            {DataId:3,DataName:'Spider curls'},
            {DataId:4,DataName:'Hammer curls'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },



    {
        TemplateID:6,
        NameTemplate:"Leg Day Default Template",
        TemplateData:[
            {DataId:1,DataName:'Seated calf raises'},
            {DataId:2,DataName:'Leg extensions'},
            {DataId:3,DataName:'Leg press'},
            {DataId:4,DataName:'Hacksquats'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },


    {
        TemplateID:7,
        NameTemplate:"Weird Template",
        TemplateData:[
            {DataId:1,DataName:'Bench press'},
            {DataId:2,DataName:'Lat pull downs'},
            {DataId:3,DataName:'Squats'},
            {DataId:4,DataName:'Barbell military press'}
        ],
        TemplateSets:[
            {ExcerciseId:1,id:1,set:0,reps:0,weight:0},
            {ExcerciseId:2,id:2,set:0,reps:0,weight:0},
            {ExcerciseId:3,id:3,set:0,reps:0,weight:0},
            {ExcerciseId:4,id:4,set:0,reps:0,weight:0}
        ]
    },



]



export const setCurrentData = (data: CurrentData): void => {
    currentData = { ...currentData, ...data }; // Merge new data with existing
};

// Function to get the entire data
export const getCurrentData = (): CurrentData[] => {
    return currentData;
};

export const setCurrentId = (id:number): void=>{
    Currentid=id;
}

export const getCurrentID = (): number=>{
    return Currentid;
}

export const addToTemplate = (
    templateID: number,
    templateData: TemplateData[],
    templateSets: TemplateSets[]
  ): void => {
    
    const TemplateIndex = currentData.findIndex((item)=>item.TemplateID===templateID)
    currentData[TemplateIndex].TemplateData=templateData
    currentData[TemplateIndex].TemplateSets=templateSets

  };

export const addTemplate = ():void =>{

    const last_element = currentData[currentData.length-1].TemplateID;
    setCurrentId(last_element+1)




}

