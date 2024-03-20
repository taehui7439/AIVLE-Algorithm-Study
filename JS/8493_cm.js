function make_dic(n, str_list) {
	str_list = [...new Set(str_list)];

	function compare(a, b) {
		if (a.length !== b.length) {
			return a.length - b.length;
		}
		return a.localeCompare(b)

	}

	str_list.sort(compare);

	for (let i = 0; i < str_list.length; i++) {
		console.log(str_list[i]);
	}
}

n = 6;
str_list = ['monk', 'apply', 'angel', 'elephant', 'apply', 'encyclopedia'];

make_dic(n, str_list);
