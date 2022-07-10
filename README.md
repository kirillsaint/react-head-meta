## react-head-meta

A simple library for changing page meta tags.

## Installation

To install, you can use npm or yarn:

```
npm install react-head-meta

or

yarn add react-head-meta
```

## Usage

The library is very easy to use, even a child can handle it!

The library has only 2 components responsible for meta tags.

### Basic Example

```jsx
import { Title, Description } from "react-head-meta";

function App() {
	return (
		<div>
			<Title title="Home page | MyApp" />
			<Description title="Home page of my new app" />
			<h1>Home page</h1>
		</div>
	);
}
```

## Props and Types

### Title:

| Prop  | Type   |
| ----- | ------ |
| title | string |

### Description:

| Prop        | Type   |
| ----------- | ------ |
| description | string |

## License

MIT
