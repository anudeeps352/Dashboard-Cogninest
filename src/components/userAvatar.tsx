import user from '../../public/user.jpg';
import Image from 'next/image';
export default function UserAvatar() {
  return (
    <div className="flex absolute right-8 top-8 md:right-24 md:top-12 gap-4">
      <div className="flex flex-col">
        <h3 className="font-bold">Hi, Username</h3>
        <h3 className="text-blue-600 text-sm"> Credits left : 300</h3>
      </div>
      <div className="h-12 w-12 relative">
        <div className="relative aspect-square w-full h-auto rounded-lg overflow-hidden">
          <Image src={user} alt={'user logo'} fill></Image>
        </div>
      </div>
    </div>
  );
}
