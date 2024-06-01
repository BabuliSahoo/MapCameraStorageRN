class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat : 0.141241, long : 85.1423}
    this.id = new Date().toString() + Math.random().toString();
  }
}
