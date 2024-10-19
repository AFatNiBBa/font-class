
import { Icon } from "../../index";

/**
 * A component that renders the `globe-stand` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/globe-stand?s=solid globe-stand}
 * @preview ![globe-stand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMzUyQzI5My4yNjYgMzUyIDM2OCAyODMuMzQ3IDM2OCAxOTJDMzY4IDEwMC42MDYgMjkzLjI2NyAzMiAyMDggMzJDMTIyLjczNCAzMiA0OCAxMDAuNjUzIDQ4IDE5MkM0OCAyODMuMzk0IDEyMi43MzMgMzUyIDIwOCAzNTJaTTM0OC4wNzggNDYzLjk5MkgyNTYuMDc0VjQyNi45ODhDMzAwLjcwMSA0MTcuOTg4IDM0My4yMDMgMzk2LjIzNCAzNzcuODMgMzYxLjczQzQyNC42MzEgMzE0LjkyNiA0NDggMjUzLjY1NSA0NDggMTkyLjM3NEM0NDggMTQyLjAyMyA0MzIuMjI0IDkxLjY2NiA0MDAuNzA1IDQ5LjMyTDQxMS40NTcgMzguNTY2QzQxNC41ODIgMzUuNDQxIDQxNi4xNDUgMzEuMzQ3IDQxNi4xNDUgMjcuMjUyUzQxNC41ODIgMTkuMDYyIDQxMS40NTcgMTUuOTM3TDQwMC4wOCA0LjY4N0MzOTYuOTU1IDEuNTYyIDM5Mi44NjEgMCAzODguNzY4IDBTMzgwLjU4IDEuNTYyIDM3Ny40NTUgNC42ODhMMzM0LjQ1MyA0Ny42OTVDMzc4LjYyNiA4Ni41NjcgMzk5Ljk4NyAxMzkuMDMgMzk5Ljk4NyAxOTEuOTYxQzM5OS45ODcgMjk3LjY0NSAzMTQuNjEyIDM4My45ODQgMjA4LjA3MiAzODMuOTg0QzExNCAzODMuOTg0IDY2LjYxOCAzMjAuNzE5IDY0LjE4OSAzMTcuODUyTDQuNjg4IDM3Ny4zNTlDMS41NjIgMzgwLjQ4NCAwIDM4NC41NzggMCAzODguNjcyUzEuNTYyIDM5Ni44NTkgNC42ODggMzk5Ljk4NEwxNS45MzggNDExLjIzNEMxOS4wNjMgNDE0LjM2MSAyMy4xNTggNDE1LjkyNSAyNy4yNTIgNDE1LjkyNVMzNS40MzkgNDE0LjM2MSAzOC41NjQgNDExLjIzNEw2NS4zMTYgMzg0LjYwOUMxMDMuMDY2IDQxMi42MTMgMTQ3LjE5MyA0MjguMjM4IDE5Mi4wNyA0MzEuMjQyVjQ2My45OTJIOTkuOTQxQzgwLjA2NiA0NjMuOTkyIDYzLjkzOSA0ODAuMTIxIDYzLjkzOSA1MDBDNjMuOTM5IDUwNi42MjUgNjkuMzE2IDUxMiA3NS45NDEgNTEySDM3Mi4wOEMzNzguNzA1IDUxMiAzODQuMDggNTA2LjYyNSAzODQuMDggNTAwQzM4NC4wOCA0ODAuMTIxIDM2Ny45NTUgNDYzLjk5MiAzNDguMDc4IDQ2My45OTJaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
const GlobeStand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 352C293.266 352 368 283.347 368 192C368 100.606 293.267 32 208 32C122.734 32 48 100.653 48 192C48 283.394 122.733 352 208 352ZM348.078 463.992H256.074V426.988C300.701 417.988 343.203 396.234 377.83 361.73C424.631 314.926 448 253.655 448 192.374C448 142.023 432.224 91.666 400.705 49.32L411.457 38.566C414.582 35.441 416.145 31.347 416.145 27.252S414.582 19.062 411.457 15.937L400.08 4.687C396.955 1.562 392.861 0 388.768 0S380.58 1.562 377.455 4.688L334.453 47.695C378.626 86.567 399.987 139.03 399.987 191.961C399.987 297.645 314.612 383.984 208.072 383.984C114 383.984 66.618 320.719 64.189 317.852L4.688 377.359C1.562 380.484 0 384.578 0 388.672S1.562 396.859 4.688 399.984L15.938 411.234C19.063 414.361 23.158 415.925 27.252 415.925S35.439 414.361 38.564 411.234L65.316 384.609C103.066 412.613 147.193 428.238 192.07 431.242V463.992H99.941C80.066 463.992 63.939 480.121 63.939 500C63.939 506.625 69.316 512 75.941 512H372.08C378.705 512 384.08 506.625 384.08 500C384.08 480.121 367.955 463.992 348.078 463.992Z " />
    </Icon>
);

export default GlobeStand;