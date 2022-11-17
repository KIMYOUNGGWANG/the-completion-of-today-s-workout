import React from 'react';
import styled from 'styled-components';
interface Props {
  files: UpdateFiles;
  selectImageHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageContents: React.FC<Props> = ({files, selectImageHandler}) => {
  return (
    <div style={{height: 'calc(100% - 30px)', display: 'flex', width: '100%', flexDirection: 'column'}}>
      <input type="file" onChange={selectImageHandler} />
      <ImageWrapper>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  img {
    margin: 20px 0;
    width: 100%;
    max-width: 300px;
  }
`;
