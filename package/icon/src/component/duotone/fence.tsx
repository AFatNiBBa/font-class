
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fence` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=duotone fence}
 * @preview ![fence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyMjRIMjI0VjE2MEgxMjhWMjI0Wk0xMjggNDE2SDIyNFYzNTJIMTI4VjQxNlpNMzUyIDQxNkg0NDhWMzUySDM1MlY0MTZaTTM1MiAxNjBWMjI0SDQ0OFYxNjBIMzUyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgNzguOTYyQzM1MiA3Mi4wMzggMzQ5Ljc1NCA2NS4zIDM0NS42IDU5Ljc2TDMwMC43OTkgMC4wMjhDMjk0LjQgLTguNTA3IDI4MS42IC04LjUwNyAyNzUuMTk5IDAuMDI4TDIzMC4zOTggNTkuNzZDMjI2LjI0NCA2NS4zIDIyNCA3Mi4wMzggMjI0IDc4Ljk2MlY0NzMuNjI4QzIyNCA0OTEuMyAyMzguMzI2IDUwNS42MjggMjU2IDUwNS42MjhIMzIwQzMzNy42NzQgNTA1LjYyOCAzNTIgNDkxLjMgMzUyIDQ3My42MjhWNzguOTYyWk0xMjggNzguOTYyQzEyOCA3Mi4wMzggMTI1Ljc1NiA2NS4zIDEyMS42MDIgNTkuNzZMNzYuODAxIDAuMDI4QzcwLjQgLTguNTA3IDU3LjYgLTguNTA3IDUxLjIwMSAwLjAyOEw2LjQgNTkuNzZDMi4yNDYgNjUuMyAwIDcyLjAzOCAwIDc4Ljk2MlY0NzMuNjI4QzAgNDkxLjMgMTQuMzI2IDUwNS42MjggMzIgNTA1LjYyOEg5NkMxMTMuNjc0IDUwNS42MjggMTI4IDQ5MS4zIDEyOCA0NzMuNjI4Vjc4Ljk2MlpNNTY5LjYgNTkuNzZMNTI0Ljc5OSAwLjAyOEM1MTguNCAtOC41MDcgNTA1LjYgLTguNTA3IDQ5OS4xOTkgMC4wMjhMNDU0LjM5OCA1OS43NkM0NTAuMjQ0IDY1LjMgNDQ4IDcyLjAzOCA0NDggNzguOTYyVjQ3My42MjhDNDQ4IDQ5MS4zIDQ2Mi4zMjYgNTA1LjYyOCA0ODAgNTA1LjYyOEg1NDRDNTYxLjY3NCA1MDUuNjI4IDU3NiA0OTEuMyA1NzYgNDczLjYyOFY3OC45NjJDNTc2IDcyLjAzOCA1NzMuNzU0IDY1LjMgNTY5LjYgNTkuNzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fence: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 224H224V160H128V224ZM128 416H224V352H128V416ZM352 416H448V352H352V416ZM352 160V224H448V160H352Z" />
            <path d="M352 78.962C352 72.038 349.754 65.3 345.6 59.76L300.799 0.028C294.4 -8.507 281.6 -8.507 275.199 0.028L230.398 59.76C226.244 65.3 224 72.038 224 78.962V473.628C224 491.3 238.326 505.628 256 505.628H320C337.674 505.628 352 491.3 352 473.628V78.962ZM128 78.962C128 72.038 125.756 65.3 121.602 59.76L76.801 0.028C70.4 -8.507 57.6 -8.507 51.201 0.028L6.4 59.76C2.246 65.3 0 72.038 0 78.962V473.628C0 491.3 14.326 505.628 32 505.628H96C113.674 505.628 128 491.3 128 473.628V78.962ZM569.6 59.76L524.799 0.028C518.4 -8.507 505.6 -8.507 499.199 0.028L454.398 59.76C450.244 65.3 448 72.038 448 78.962V473.628C448 491.3 462.326 505.628 480 505.628H544C561.674 505.628 576 491.3 576 473.628V78.962C576 72.038 573.754 65.3 569.6 59.76Z" />
    </Icon>
);

export default Fence;