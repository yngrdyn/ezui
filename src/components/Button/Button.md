A very simple button.

```jsx
import { Button } from 'ezui';

function handleClick(e) {
    e.preventDefault();
    alert('Button was clicked.');
}

<Button text="I'm a button!" onClick={handleClick}/>

```