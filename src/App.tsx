import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const App = () => {

  return (
    <div>
      <span>React Webpack SSR Boilerplatte</span>
      <Picker
        title={'Reactions'}
        showSkinTones={false}
      />
    </div>
  );
}

export default App;
