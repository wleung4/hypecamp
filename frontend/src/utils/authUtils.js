export const restoreSession = async() => {
	try {
		const res = await fetch('/api/session');
		const token = res.headers.get('X-CSRF-Token');
		if (res.ok) {
			const data = await res.json();
			sessionStorage.setItem('currentUser', JSON.stringify(data.user));
			sessionStorage.setItem('csrfToken', token);
		} else {
			throw res
		}
	} catch {
		console.error('restoreSession is broken')
	}
	

}