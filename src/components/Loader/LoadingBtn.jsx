import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
export default function LoadingButtonsTransition({btnName,sx,isLoading}) {
  return (
    <div>
      <LoadingButton
        type="sumbit"
        loading={isLoading}
        variant="contained"
        sx={sx}
      >
        <span className="px-5 text-base">{btnName}</span>
      </LoadingButton>
    </div>
  );
}
