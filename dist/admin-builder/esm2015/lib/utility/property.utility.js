export class PropertyUtils {
    static getPropertyFromLocalStore(key) {
        let propertiesMap = JSON.parse(localStorage.getItem("properties"));
        return propertiesMap[key];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbml0aW5raGFpdGFuL05pdGluL3N0dWR5L2FuZ3VsYXIvbWF0ZXJpYWwvYWRtaW4tYnVpbGRlci1wbHVnaW4vcHJvamVjdHMvYWRtaW4tYnVpbGRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0eS9wcm9wZXJ0eS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxhQUFhO0lBQ3RCLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxHQUFXO1FBQ3hDLElBQUksYUFBYSxHQUEwQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUUxRixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gJy4uL3NldHRpbmcvbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlVdGlscyB7XG4gICAgc3RhdGljIGdldFByb3BlcnR5RnJvbUxvY2FsU3RvcmUoa2V5OiBzdHJpbmcpOiBQcm9wZXJ0eSB7XG4gICAgICAgIGxldCBwcm9wZXJ0aWVzTWFwOiBNYXA8c3RyaW5nLCBQcm9wZXJ0eT4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvcGVydGllc1wiKSk7XG5cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXNNYXBba2V5XTtcbiAgICB9XG59XG4iXX0=