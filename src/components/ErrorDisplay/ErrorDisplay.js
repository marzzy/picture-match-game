export function ErrorDisplay({errorMessage}) {
  return (
    <div>
      <div>Ops! something went wrong trying fetching the images! - {errorMessage}</div>
    </div>
  );
}
