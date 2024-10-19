
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-worried` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-worried?s=duotone face-worried}
 * @preview ![face-worried](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEwMC4zLTY5LjFjLTYtNi41LTUuNy0xNi42IC44LTIyLjZjMjAuMS0xOC43IDQ1LjUtMzEuNSA3My43LTM1LjJjNS42LS43IDExLjQtMS4xIDE3LjItMS4xYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2Yy00LjQgMC04LjggLjMtMTMgLjljLTIxLjIgMi44LTQwLjYgMTIuNC01Ni4xIDI2LjhjLTYuNSA2LTE2LjYgNS43LTIyLjYtLjh6TTIwOC40IDI3MmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwek0xNjEuMyAzOTguMWMxNi0zNi42IDUyLjQtNjIuMSA5NC44LTYyLjFzNzguOCAyNS42IDk0LjggNjIuMWM1LjQgMTIuMy04LjcgMjEuNi0yMS4xIDE2LjRjLTIyLjQtOS41LTQ3LjQtMTQuOC03My43LTE0LjhzLTUxLjMgNS4zLTczLjcgMTQuOGMtMTIuNCA1LjItMjYuNS00LjEtMjEuMS0xNi40ek0zMDQgMTQ0YzAtOC44IDcuMi0xNiAxNi0xNmM1LjggMCAxMS42IC40IDE3LjIgMS4xYzI4LjIgMy43IDUzLjcgMTYuNCA3My43IDM1LjJjMy40IDMuMiA1LjEgNy40IDUuMSAxMS43YzAgMy45LTEuNCA3LjgtNC4zIDEwLjljLTYgNi41LTE2LjIgNi44LTIyLjYgLjhjLTE1LjUtMTQuNS0zNC44LTI0LTU2LjEtMjYuOGMtNC4zLS42LTguNi0uOS0xMy0uOWMtOC44IDAtMTYtNy4yLTE2LTE2em02NC40IDEyOGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDE2MGMtNC40IDAtOC44IC4zLTEzIC45Yy0yMS4yIDIuOC00MC42IDEyLjQtNTYuMSAyNi44Yy02LjUgNi0xNi42IDUuNy0yMi42LS44cy01LjctMTYuNiAuOC0yMi42YzIwLjEtMTguNyA0NS41LTMxLjUgNzMuNy0zNS4yYzUuNi0uNyAxMS40LTEuMSAxNy4yLTEuMWM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNnptLTE1LjYgODBhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0em0xNjAgMGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6TTMzMyAxNjAuOWMtNC4zLS42LTguNi0uOS0xMy0uOWMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmM1LjggMCAxMS42IC40IDE3LjIgMS4xYzI4LjIgMy43IDUzLjcgMTYuNCA3My43IDM1LjJjNi41IDYgNi44IDE2LjIgLjggMjIuNnMtMTYuMiA2LjgtMjIuNiAuOGMtMTUuNS0xNC41LTM0LjgtMjQtNTYuMS0yNi44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceWorried: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm100.3-69.1c-6-6.5-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8zM208.4 272a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM161.3 398.1c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8c-12.4 5.2-26.5-4.1-21.1-16.4zM304 144c0-8.8 7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c3.4 3.2 5.1 7.4 5.1 11.7c0 3.9-1.4 7.8-4.3 10.9c-6 6.5-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16zm64.4 128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M192 160c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6 .8-22.6c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-15.6 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM333 160.9c-4.3-.6-8.6-.9-13-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2c6.5 6 6.8 16.2 .8 22.6s-16.2 6.8-22.6 .8c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceWorried;