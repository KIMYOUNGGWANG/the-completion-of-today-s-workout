import React from 'react';
import styled from 'styled-components';
interface Props {
  files: UpdateFiles;
  selectImageHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageContents: React.FC<Props> = ({files, selectImageHandler}) => {
  return (
    <div>
      <ImageWrapper>
        <input type="file" onChange={selectImageHandler} />
        {files.image.length === 0 && <img src={'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} style={{width: 300, height: 300}} />}
        {files?.image.map(el => {
          return <img src={el.thumbnail} key={el.thumbnail} alt={el.thumbnail} />;
        })}
      </ImageWrapper>
    </div>
  );
};

export default ImageContents;
const ImageWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin: 20px 0;
    width: 100%;
  }
`;
