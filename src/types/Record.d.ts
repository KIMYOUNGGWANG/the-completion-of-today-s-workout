declare interface UpdateFiles {
  image: UpdateImage[];
  date: string;
  workout: string;
}

declare interface UpdateImage {
  file: File;
  thumbnail: string;
  type: string;
}
