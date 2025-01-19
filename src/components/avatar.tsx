import Image from 'next/image';

type AvatarProps = {
  src: string; // Path or URL of the image
  alt?: string; // Alt text for accessibility
  size?: number; // Size of the avatar (default is 100px)
};

export default function Avatar({ src, alt = 'Avatar' }: AvatarProps) {
  return (
    <div className="relative aspect-square w-full h-auto rounded-lg overflow-hidden">
      <Image src={src} alt={alt} fill></Image>
    </div>
  );
}
