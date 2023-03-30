import Upload, { openModal } from "@/component/Upload";

export default function Home() {
  const onClickHandler = () => {
    openModal();
  };

  return (
    <>
      <button onClick={onClickHandler}>Any other place</button>
      {/* component is updated */}
      <Upload />
    </>
  );
}
