function autocomplet_set_google_autocomplete(){
	jQuery(input_fields).each(function(){
		console.log(jQuery(this));
		let autocomplete= new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */(this));
		autocomplete.addListener("place_changed", fillInAddress);
		function fillInAddress() {
			const place = autocomplete.getPlace();
			console.log(place);
			let postal_code = '';
			let street_number = '';
			let country = '';
			let city = '';
			let state = '';
			for (var i = 0; i < place.address_components.length; i++) {
			  for (var j = 0; j < place.address_components[i].types.length; j++) {
				if (place.address_components[i].types[j] == "postal_code") {
					postal_code = place.address_components[i].long_name;
				}
				if (place.address_components[i].types[j] == "street_number") {
					street_number = place.address_components[i].long_name;
				}
				if (place.address_components[i].types[j] == "country") {
					country = place.address_components[i].long_name;
				}
				if (place.address_components[i].types[j] == "locality") {
					city = place.address_components[i].long_name;
				}
				if (place.address_components[i].types[j] == "administrative_area_level_1") {
					state = place.address_components[i].short_name;
				}
			  }
			}
			
			

			jQuery('#billing_postcode').val(postal_code);
			jQuery('#billing_city').val(city);
			jQuery('#billing_state').find('option[value="'+ state +'"]').prop('selected',true);
			jQuery(input_fields).trigger("change");
		}
	});
}
jQuery(window).on('load',function () {
	autocomplet_set_google_autocomplete();
});
console.log('autocomplet_set_google_autocomplete');
