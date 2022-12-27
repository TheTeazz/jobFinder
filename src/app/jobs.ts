export class Jobs {

    constructor(
        public title: string,
        public location: any,
        public isApplied: boolean,
        public requirements: string[]
        ){
            
        }
    
}

export class Description {

    constructor(
        public title: string,
        public location: any,
        public isApplied: boolean,
        public requirements: string[],
        public responsibilities: string[]
        ){
            
        }
    
}
