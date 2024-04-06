import Image from "next/image";

/* const RandomFox = () => {
  return <div>RandomFox</div>;
}; */

/* const RandomFox2: FunctionComponent = () => {
  return <div>RandomFox</div>;
};
 */

/* const RandomFox3: FC = () => {
  return <div>RandomFox</div>;
};
 */

type props = {
  image: string;
};

export const RandomFox = (props: props): JSX.Element => {
  return (
    <>
      <div>Random Fox</div>
      <Image src={props.image} alt='fox' width={320} height={320} />;
    </>
  );
};

export default RandomFox;
