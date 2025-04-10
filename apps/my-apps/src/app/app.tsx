import NxWelcome from './nx-welcome';
import {version} from '../../../../package.json'

// 3.1.0
export function App() {
  return (
    <div>
      { import.meta.env.VITE_APP_VERSION || version || 'hello'}
      <NxWelcome title="my-apps" />
    </div>
  );
}

export default App;
