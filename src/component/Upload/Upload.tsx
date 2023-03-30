import React, { useCallback, useEffect, useState } from "react";

import { EVENT_TYPES, UploadEmitter } from "./event";

const Upload = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onOpenHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    UploadEmitter.on(EVENT_TYPES.OPEN, onOpenHandler);

    return () => {
      UploadEmitter.off(EVENT_TYPES.OPEN, onOpenHandler);
    };
  }, [onOpenHandler]);

  if (!modalIsOpen) return null;

  return (
    <div>
      i am third party code
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        close me
      </button>
    </div>
  );
};

export default Upload;
