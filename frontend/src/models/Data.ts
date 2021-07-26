class DataClass {
	no: number;
	producer: string;
	model: string;

	constructor(noNumber:number, producerString: string, modelString: string) {
		this.no = noNumber;
		this.producer = producerString;
		this.model = modelString;
	}
}

export default DataClass;