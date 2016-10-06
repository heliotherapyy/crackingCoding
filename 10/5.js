// use binary search
// but move middle to the closest valid element

function binarySearch(array, start, end, target) {
	if (target === "" || !target) {
		return -1;
	}

	while (start <= end) {
		var mid = findMiddle(array, start, end);

		if (mid === -1) {
			return -1;
		}

		var data = array[mid];
		if (data === target) {
			return mid;
		} else if (data < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}

function findMiddle(array, start, end) {
	if (start > end) {
		return -1;
	} else if (start === end) {
		return start;
	}

	var mid = Math.floor((start + end) / 2);

	if (array[mid] === "") {
		var left = mid - 1;
		var right = mid + 1;

		while (array[left] === "") {
			left--;
		}/**/

		while (array[right] === "") {
			right++;
		}

		var diff1, diff2;
		diff1 = Math.abs(mid - left);
		diff2 = Math.abs(right - mid);

		if (diff1 < diff2) {
			return left;
		} else {
			return right;
		}
	}
}

var array = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
var answer = binarySearch(array, 0, array.length -1, 324234);
console.log(answer);
