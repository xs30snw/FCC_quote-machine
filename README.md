# Custom Webpack setup for React with TS

    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx'],
    },

eliminates error when import TS modules without *.tsx* extensions

    import App from './components/App';