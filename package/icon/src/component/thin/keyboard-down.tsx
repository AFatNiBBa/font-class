
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=thin keyboard-down}
 * @preview ![keyboard-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODAgMTI4SDI5NkMzMDkuMjU2IDEyOCAzMjAgMTE3LjI1NCAzMjAgMTA0Vjg4QzMyMCA3NC43NDYgMzA5LjI1NiA2NCAyOTYgNjRIMjgwQzI2Ni43NDYgNjQgMjU2IDc0Ljc0NiAyNTYgODhWMTA0QzI1NiAxMTcuMjU0IDI2Ni43NDYgMTI4IDI4MCAxMjhaTTI3MiA4OEMyNzIgODMuNTkgMjc1LjU5IDgwIDI4MCA4MEgyOTZDMzAwLjQxMiA4MCAzMDQgODMuNTkgMzA0IDg4VjEwNEMzMDQgMTA4LjQxIDMwMC40MTIgMTEyIDI5NiAxMTJIMjgwQzI3NS41OSAxMTIgMjcyIDEwOC40MSAyNzIgMTA0Vjg4Wk01MTIgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjIyNEMwIDI1OS4zNDggMjguNjU0IDI4OCA2NCAyODhINTEyQzU0Ny4zNDggMjg4IDU3NiAyNTkuMzQ4IDU3NiAyMjRWNjRDNTc2IDI4LjY1MiA1NDcuMzQ4IDAgNTEyIDBaTTU2MCAyMjRDNTYwIDI1MC40NjkgNTM4LjQ2NyAyNzIgNTEyIDI3Mkg2NEMzNy41MzMgMjcyIDE2IDI1MC40NjkgMTYgMjI0VjY0QzE2IDM3LjUzMSAzNy41MzMgMTYgNjQgMTZINTEyQzUzOC40NjcgMTYgNTYwIDM3LjUzMSA1NjAgNjRWMjI0Wk00ODggMTYwSDQ3MkM0NTguNzQ2IDE2MCA0NDggMTcwLjc0NiA0NDggMTg0VjIwMEM0NDggMjEzLjI1NCA0NTguNzQ2IDIyNCA0NzIgMjI0SDQ4OEM1MDEuMjU2IDIyNCA1MTIgMjEzLjI1NCA1MTIgMjAwVjE4NEM1MTIgMTcwLjc0NiA1MDEuMjU2IDE2MCA0ODggMTYwWk00OTYgMjAwQzQ5NiAyMDQuNDEgNDkyLjQxMiAyMDggNDg4IDIwOEg0NzJDNDY3LjU5IDIwOCA0NjQgMjA0LjQxIDQ2NCAyMDBWMTg0QzQ2NCAxNzkuNTkgNDY3LjU5IDE3NiA0NzIgMTc2SDQ4OEM0OTIuNDEyIDE3NiA0OTYgMTc5LjU5IDQ5NiAxODRWMjAwWk0zOTIgMTYwSDE4NEMxNzAuNzQ2IDE2MCAxNjAgMTcwLjc0NiAxNjAgMTg0VjIwMEMxNjAgMjEzLjI1NCAxNzAuNzQ2IDIyNCAxODQgMjI0SDM5MkM0MDUuMjU2IDIyNCA0MTYgMjEzLjI1NCA0MTYgMjAwVjE4NEM0MTYgMTcwLjc0NiA0MDUuMjU2IDE2MCAzOTIgMTYwWk00MDAgMjAwQzQwMCAyMDQuNDEgMzk2LjQxMiAyMDggMzkyIDIwOEgxODRDMTc5LjU5IDIwOCAxNzYgMjA0LjQxIDE3NiAyMDBWMTg0QzE3NiAxNzkuNTkgMTc5LjU5IDE3NiAxODQgMTc2SDM5MkMzOTYuNDEyIDE3NiA0MDAgMTc5LjU5IDQwMCAxODRWMjAwWk0xMDQgMTYwSDg4Qzc0Ljc0NiAxNjAgNjQgMTcwLjc0NiA2NCAxODRWMjAwQzY0IDIxMy4yNTQgNzQuNzQ2IDIyNCA4OCAyMjRIMTA0QzExNy4yNTYgMjI0IDEyOCAyMTMuMjU0IDEyOCAyMDBWMTg0QzEyOCAxNzAuNzQ2IDExNy4yNTYgMTYwIDEwNCAxNjBaTTExMiAyMDBDMTEyIDIwNC40MSAxMDguNDEyIDIwOCAxMDQgMjA4SDg4QzgzLjU5IDIwOCA4MCAyMDQuNDEgODAgMjAwVjE4NEM4MCAxNzkuNTkgODMuNTkgMTc2IDg4IDE3NkgxMDRDMTA4LjQxMiAxNzYgMTEyIDE3OS41OSAxMTIgMTg0VjIwMFpNMzkyIDY0SDM3NkMzNjIuNzQ2IDY0IDM1MiA3NC43NDYgMzUyIDg4VjEwNEMzNTIgMTE3LjI1NCAzNjIuNzQ2IDEyOCAzNzYgMTI4SDM5MkM0MDUuMjU2IDEyOCA0MTYgMTE3LjI1NCA0MTYgMTA0Vjg4QzQxNiA3NC43NDYgNDA1LjI1NiA2NCAzOTIgNjRaTTQwMCAxMDRDNDAwIDEwOC40MSAzOTYuNDEyIDExMiAzOTIgMTEySDM3NkMzNzEuNTkgMTEyIDM2OCAxMDguNDEgMzY4IDEwNFY4OEMzNjggODMuNTkgMzcxLjU5IDgwIDM3NiA4MEgzOTJDMzk2LjQxMiA4MCA0MDAgODMuNTkgNDAwIDg4VjEwNFpNMTg0IDEyOEgyMDBDMjEzLjI1NiAxMjggMjI0IDExNy4yNTQgMjI0IDEwNFY4OEMyMjQgNzQuNzQ2IDIxMy4yNTYgNjQgMjAwIDY0SDE4NEMxNzAuNzQ2IDY0IDE2MCA3NC43NDYgMTYwIDg4VjEwNEMxNjAgMTE3LjI1NCAxNzAuNzQ2IDEyOCAxODQgMTI4Wk0xNzYgODhDMTc2IDgzLjU5IDE3OS41OSA4MCAxODQgODBIMjAwQzIwNC40MTIgODAgMjA4IDgzLjU5IDIwOCA4OFYxMDRDMjA4IDEwOC40MSAyMDQuNDEyIDExMiAyMDAgMTEySDE4NEMxNzkuNTkgMTEyIDE3NiAxMDguNDEgMTc2IDEwNFY4OFpNMTA0IDY0SDg4Qzc0Ljc0NiA2NCA2NCA3NC43NDYgNjQgODhWMTA0QzY0IDExNy4yNTQgNzQuNzQ2IDEyOCA4OCAxMjhIMTA0QzExNy4yNTYgMTI4IDEyOCAxMTcuMjU0IDEyOCAxMDRWODhDMTI4IDc0Ljc0NiAxMTcuMjU2IDY0IDEwNCA2NFpNMTEyIDEwNEMxMTIgMTA4LjQxIDEwOC40MTIgMTEyIDEwNCAxMTJIODhDODMuNTkgMTEyIDgwIDEwOC40MSA4MCAxMDRWODhDODAgODMuNTkgODMuNTkgODAgODggODBIMTA0QzEwOC40MTIgODAgMTEyIDgzLjU5IDExMiA4OFYxMDRaTTQ4OCA2NEg0NzJDNDU4Ljc0NiA2NCA0NDggNzQuNzQ2IDQ0OCA4OFYxMDRDNDQ4IDExNy4yNTQgNDU4Ljc0NiAxMjggNDcyIDEyOEg0ODhDNTAxLjI1NiAxMjggNTEyIDExNy4yNTQgNTEyIDEwNFY4OEM1MTIgNzQuNzQ2IDUwMS4yNTYgNjQgNDg4IDY0Wk00OTYgMTA0QzQ5NiAxMDguNDEgNDkyLjQxMiAxMTIgNDg4IDExMkg0NzJDNDY3LjU5IDExMiA0NjQgMTA4LjQxIDQ2NCAxMDRWODhDNDY0IDgzLjU5IDQ2Ny41OSA4MCA0NzIgODBINDg4QzQ5Mi40MTIgODAgNDk2IDgzLjU5IDQ5NiA4OFYxMDRaTTM5MiAzNTEuODk1SDE4NEMxNzQuNDUxIDM1MS44OTUgMTY1LjgxMSAzNTcuNTU1IDE2MiAzNjYuMzExQzE1OC4xODYgMzc1LjA2NiAxNTkuOTIgMzg1LjI2IDE2Ni40MDQgMzkyLjI0OEwyNzAuNDA2IDUwNC4zMjJDMjc1LjE1NiA1MDkuNDM5IDI4MS41NzggNTEyIDI4OCA1MTJTMzAwLjg0NCA1MDkuNDM5IDMwNS41OTQgNTA0LjMyMkw0MDkuNTk2IDM5Mi4yNDhDNDE2LjA4IDM4NS4yNiA0MTcuODE0IDM3NS4wNjYgNDE0LjAwNCAzNjYuMzExQzQxMC4xODkgMzU3LjU1NSA0MDEuNTQ3IDM1MS44OTUgMzkyIDM1MS44OTVaTTM5Ny44NjcgMzgxLjM2M0wyOTMuODY1IDQ5My40MzlDMjkxLjc5NyA0OTUuNjY2IDI4OS4zMDMgNDk2IDI4OCA0OTZTMjg0LjIwMyA0OTUuNjY2IDI4Mi4xMzUgNDkzLjQzOEwxNzguMTMzIDM4MS4zNjVDMTc1Ljk2NyAzNzkuMDMxIDE3NS4zOTMgMzc1LjYyOSAxNzYuNjcgMzcyLjY5NUMxNzcuOTM5IDM2OS43NzkgMTgwLjgxNiAzNjcuODk1IDE4NCAzNjcuODk1SDM5MkMzOTUuMTg0IDM2Ny44OTUgMzk4LjA2MiAzNjkuNzgxIDM5OS4zMzIgMzcyLjY5NUM0MDAuNjA5IDM3NS42MjcgNDAwLjAzMyAzNzkuMDI5IDM5Ny44NjcgMzgxLjM2M1oiLz48L3N2Zz4=|width=32|height=32)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M280 128H296C309.256 128 320 117.254 320 104V88C320 74.746 309.256 64 296 64H280C266.746 64 256 74.746 256 88V104C256 117.254 266.746 128 280 128ZM272 88C272 83.59 275.59 80 280 80H296C300.412 80 304 83.59 304 88V104C304 108.41 300.412 112 296 112H280C275.59 112 272 108.41 272 104V88ZM512 0H64C28.654 0 0 28.652 0 64V224C0 259.348 28.654 288 64 288H512C547.348 288 576 259.348 576 224V64C576 28.652 547.348 0 512 0ZM560 224C560 250.469 538.467 272 512 272H64C37.533 272 16 250.469 16 224V64C16 37.531 37.533 16 64 16H512C538.467 16 560 37.531 560 64V224ZM488 160H472C458.746 160 448 170.746 448 184V200C448 213.254 458.746 224 472 224H488C501.256 224 512 213.254 512 200V184C512 170.746 501.256 160 488 160ZM496 200C496 204.41 492.412 208 488 208H472C467.59 208 464 204.41 464 200V184C464 179.59 467.59 176 472 176H488C492.412 176 496 179.59 496 184V200ZM392 160H184C170.746 160 160 170.746 160 184V200C160 213.254 170.746 224 184 224H392C405.256 224 416 213.254 416 200V184C416 170.746 405.256 160 392 160ZM400 200C400 204.41 396.412 208 392 208H184C179.59 208 176 204.41 176 200V184C176 179.59 179.59 176 184 176H392C396.412 176 400 179.59 400 184V200ZM104 160H88C74.746 160 64 170.746 64 184V200C64 213.254 74.746 224 88 224H104C117.256 224 128 213.254 128 200V184C128 170.746 117.256 160 104 160ZM112 200C112 204.41 108.412 208 104 208H88C83.59 208 80 204.41 80 200V184C80 179.59 83.59 176 88 176H104C108.412 176 112 179.59 112 184V200ZM392 64H376C362.746 64 352 74.746 352 88V104C352 117.254 362.746 128 376 128H392C405.256 128 416 117.254 416 104V88C416 74.746 405.256 64 392 64ZM400 104C400 108.41 396.412 112 392 112H376C371.59 112 368 108.41 368 104V88C368 83.59 371.59 80 376 80H392C396.412 80 400 83.59 400 88V104ZM184 128H200C213.256 128 224 117.254 224 104V88C224 74.746 213.256 64 200 64H184C170.746 64 160 74.746 160 88V104C160 117.254 170.746 128 184 128ZM176 88C176 83.59 179.59 80 184 80H200C204.412 80 208 83.59 208 88V104C208 108.41 204.412 112 200 112H184C179.59 112 176 108.41 176 104V88ZM104 64H88C74.746 64 64 74.746 64 88V104C64 117.254 74.746 128 88 128H104C117.256 128 128 117.254 128 104V88C128 74.746 117.256 64 104 64ZM112 104C112 108.41 108.412 112 104 112H88C83.59 112 80 108.41 80 104V88C80 83.59 83.59 80 88 80H104C108.412 80 112 83.59 112 88V104ZM488 64H472C458.746 64 448 74.746 448 88V104C448 117.254 458.746 128 472 128H488C501.256 128 512 117.254 512 104V88C512 74.746 501.256 64 488 64ZM496 104C496 108.41 492.412 112 488 112H472C467.59 112 464 108.41 464 104V88C464 83.59 467.59 80 472 80H488C492.412 80 496 83.59 496 88V104ZM392 351.895H184C174.451 351.895 165.811 357.555 162 366.311C158.186 375.066 159.92 385.26 166.404 392.248L270.406 504.322C275.156 509.439 281.578 512 288 512S300.844 509.439 305.594 504.322L409.596 392.248C416.08 385.26 417.814 375.066 414.004 366.311C410.189 357.555 401.547 351.895 392 351.895ZM397.867 381.363L293.865 493.439C291.797 495.666 289.303 496 288 496S284.203 495.666 282.135 493.438L178.133 381.365C175.967 379.031 175.393 375.629 176.67 372.695C177.939 369.779 180.816 367.895 184 367.895H392C395.184 367.895 398.062 369.781 399.332 372.695C400.609 375.627 400.033 379.029 397.867 381.363Z" />
    </Icon>
);

export default KeyboardDown;