A very simple button.

```jsx
import { Button } from 'ezui';

<Button text="Button!"/>
```

### Import

<pre>
import { Button } from 'ezui';
</pre>
<br>

### Props

Name | Type | Default | Description
--- | :---: | :---: | ---
onClick | func |  | Callback fired when the button is clicked.<br><br><code>function(event: object) => void</code><br><small>event: The event source of the callback.</small>

### Interaction

Use the click event binding to perform any action when the button is clicked.

```jsx
import { Button } from 'ezui';

function counter(e) {
    e.preventDefault();
    alert('Button was clicked.');
}

<Button text="Clickable!" onClick={counter}/>
```

