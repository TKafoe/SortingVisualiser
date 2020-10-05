export class InsertionSort {
    sort(arr) {
        const steps = [];
        steps.push(arr.slice());
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            while ((j > -1) && (current < arr[j])) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
            steps.push(arr.slice());
        }
        steps.push(arr.slice());
        return steps;
    }
}