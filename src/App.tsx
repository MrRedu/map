import Venezuela from "@react-map/venezuela";

// type: 'select-single' | 'select-multiple';
// size?: number;
// mapColor?: string;
// strokeColor?: string;
// strokeWidth?: number;
// hoverColor?: string;
// selectColor?: string;
// hints?: boolean;
// hintTextColor?: string;
// hintBackgroundColor?: string;
// hintPadding?: string;
// hintBorderRadius?: string;
// onSelect?: (state: string, selectedStates?: string[]) => void;

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Venezuela
      </h1>
      <div className="w-[700px] [&>div]:!w-full mx-auto">
        <Venezuela
          type={"select-multiple"}
          mapColor="#fefcfd"
          // strokeWidth={1}
          strokeColor="#0000ff"
          onSelect={(value, selectedStates) => console.log(value, selectedStates)}
          hoverColor="#121212"
        />
      </div>
    </>
  )
}

export default App
