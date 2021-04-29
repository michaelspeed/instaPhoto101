# Welcome to InstaPHOTO101!
This is an example app using Pixabay API

## Development

1. create a ``env.dev.js`` at `/app/config/`

    example `env.dev.js`:
    ````
    module.exports = {
       API_KEY: <-- Pixabay API KEY,
       URL: "https://pixabay.com/api/" <-- Pixabay API URL
    }
       ````
   
2. ``yarn install`` or ``npm install``
    
    make sure scripts at ``/bin`` has proper rights

3. ``npx react-native run-ios`` or ``npx react-native run-android`` to start the application

## Compatibility
    1. iOS
    2. Android


## App Structure

Best practices adapted from ignite - [ignite](https://infinite.red/ )

```

app
│── components
│── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx

```

**Components** - All atomic/ non atomic components resides here

**i18n** - Internationalisation [TODO to be implemented later] 

**Models** - State Management module. This implements [Mobx-State-Tree](https://mobx-state-tree.js.org/intro/welcome) as a state management tree.
    On the component level it uses Redux [requirements] to inherit all the state from mst and use it in react-native with hooks and a mst middleware.
    For more information why MST over Redux please read this - [Why not full Redux?](https://github.com/infinitered/ignite/blob/master/docs/MobX-State-Tree.md)

**Navigators** - React navigation 5 implementation

**Screens** - Applications main screens.

**Services** - Api level service usign [Apisauce](https://github.com/infinitered/apisauce) over axios

**Theme** - Styles

**Utils** - Ignite Native utilities

###Build

This app can be built similar to react native.

####BUILD FALLOUT

Please add ``org.gradle.jvmargs=-Xmx4608m`` on ``gradle.properties``

and

add ``dexOptions {
javaMaxHeapSize "4G"
}`` to android section on ``/app/build.gradle``
