
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=duotone house-fire}
 * @preview ![house-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NS41YzAgMTggMTQgMzIuMSAzMiAzMi4xbDMyIDAgMCA2OS43Yy0uMSAuOS0uMSAxLjgtLjEgMi44bDAgMTEyYzAgMjIuMSAxNy45IDQwIDQwIDQwbDE2IDBjMS4yIDAgMi40LS4xIDMuNi0uMmMxLjUgLjEgMyAuMiA0LjUgLjJsMzEuOSAwIDI0IDBjMjIuMSAwIDQwLTE3LjkgNDAtNDBsMC0yNCAwLTY0YzAtMTcuNyAxNC4zLTMyIDMyLTMybDMyIDBjMC0uNiAwLTEuMyAwLTEuOWMwLTM1LjIgMTYuMy03My42IDM3LjItMTA3LjRjMjEuNy0zNS4yIDUxLjktNzEuMiA4Ny4zLTEwMi44YzkuOC04LjggMjIuNS0xMi43IDM0LjgtMTEuN0wzMDkuNSA3Yy02LTUtMTQtNy0yMS03cy0xNSAxLTIyIDhMMTAgMjMxLjVjLTcgNy0xMCAxNS0xMCAyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0MCAzNTJjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBzLTE2MC03MS42LTE2MC0xNjBjMC03Ni43IDYyLjUtMTQ0LjcgMTA3LjItMTc5LjRjNS0zLjkgMTAuOS01LjggMTYuOC01LjhjNy45LS4xIDE2IDMuMSAyMiA5LjJsNDYgNDYgMTEuMy0xMS4zYzExLjctMTEuNyAzMC42LTEyLjcgNDIuMy0xQzYyNC41IDI2OCA2NDAgMzIwLjIgNjQwIDM1MnpNNDgwIDQ2NC4yYzM1LjMgMCA2NC0yOC43IDY0LTY0YzAtMzYuNS0zNy03My01NC44LTg4LjRjLTUuNC00LjctMTMuMS00LjctMTguNSAwQzQ1MyAzMjcuMSA0MTYgMzYzLjYgNDE2IDQwMC4yYzAgMzUuMyAyOC43IDY0IDY0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 255.5c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l32 0c0-.6 0-1.3 0-1.9c0-35.2 16.3-73.6 37.2-107.4c21.7-35.2 51.9-71.2 87.3-102.8c9.8-8.8 22.5-12.7 34.8-11.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24z" />
            <path d="M640 352c0 88.4-71.6 160-160 160s-160-71.6-160-160c0-76.7 62.5-144.7 107.2-179.4c5-3.9 10.9-5.8 16.8-5.8c7.9-.1 16 3.1 22 9.2l46 46 11.3-11.3c11.7-11.7 30.6-12.7 42.3-1C624.5 268 640 320.2 640 352zM480 464.2c35.3 0 64-28.7 64-64c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C453 327.1 416 363.6 416 400.2c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default HouseFire;