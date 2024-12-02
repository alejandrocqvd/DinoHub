import { useState } from "react";


interface CurrentData {
    TemplateID?:number;
    NameTemplate?:string;
    TemplateData?:Array<any>;
    TemplateSets?:Array<any>;
    
}


let currentData: CurrentData={};

export const setCurrentData = (data: CurrentData): void => {
    currentData = { ...currentData, ...data }; // Merge new data with existing
};

// Function to get the entire data
export const getCurrentData = (): CurrentData => {
    return currentData;
};

