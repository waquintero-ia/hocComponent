const withBorderAndBackground = (WrappedComponent) => {
  
  const EnhancedComponent = (props) => { 
      const style = {
        border: '2px solid #000',
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
      };

      return (
        <div style={style}>
          <WrappedComponent {...props} />
        </div>
      );
    };

    EnhancedComponent.displayName = `withBorderAndBackground(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return EnhancedComponent;
  };

export default withBorderAndBackground;


