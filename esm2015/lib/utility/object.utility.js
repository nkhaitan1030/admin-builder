export class ObjectUtils {
    static isEmpty(obj) {
        return obj == undefined || Object.keys(obj).length === 0;
    }
    static resolve(text, obj) {
        if (!this.isEmpty(obj)) {
            for (var key in obj) {
                text = text.replace('{' + key + '}', obj[key]);
            }
        }
        return text;
    }
    static unflatten(_json) {
        function jsonToObj(data, result) {
            return Object.keys(data).reduce((acc, current, index) => {
                const inlineKeys = current.split('.');
                let firstProp = inlineKeys.shift();
                const hasProps = inlineKeys.length >= 1;
                if (hasProps) {
                    const parsedKey = parseInt(inlineKeys[0], 10);
                    const isNextKeyNumber = !isNaN(parsedKey);
                    let _nextData = {};
                    if (!acc[firstProp]) {
                        acc[firstProp] = isNextKeyNumber ? [] : {};
                    }
                    if (isNextKeyNumber) {
                        const _index = parseInt(inlineKeys.shift(), 10);
                        const isValueInArray = acc[firstProp].length - 1 >= _index;
                        const currentValueObj = acc[firstProp][_index];
                        _nextData[inlineKeys.join('.')] = data[current];
                        acc[firstProp][_index] = isValueInArray
                            ? Object.assign(currentValueObj, jsonToObj(_nextData, currentValueObj))
                            : jsonToObj(_nextData, {});
                    }
                    else {
                        _nextData[inlineKeys.join('.')] = data[current];
                        Object.assign(acc[firstProp], jsonToObj(_nextData, acc[firstProp]));
                    }
                }
                else {
                    acc[firstProp] = data[current];
                }
                return acc;
            }, result);
        }
        return jsonToObj(_json, {});
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pdGlua2hhaXRhbi9OaXRpbi9zdHVkeS9hbmd1bGFyL21hdGVyaWFsL2FkbWluLWJ1aWxkZXItcGx1Z2luL3Byb2plY3RzL2FkbWluLWJ1aWxkZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdHkvb2JqZWN0LnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFdBQVc7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFRO1FBQ25CLE9BQU8sR0FBRyxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWSxFQUFFLEdBQVE7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFVO1FBQ3ZCLFNBQVMsU0FBUyxDQUFDLElBQVMsRUFBRSxNQUFNO1lBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNwRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLFFBQVEsRUFBRTtvQkFDVixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNqQixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDOUM7b0JBQ0QsSUFBSSxlQUFlLEVBQUU7d0JBQ2pCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ2hELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQzt3QkFDM0QsTUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMvQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGNBQWM7NEJBQ25DLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDOzRCQUN2RSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0gsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkU7aUJBQ0o7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT2JqZWN0VXRpbHMge1xuICAgIHN0YXRpYyBpc0VtcHR5KG9iajogYW55KSB7XG4gICAgICAgIHJldHVybiBvYmogPT0gdW5kZWZpbmVkIHx8IE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXNvbHZlKHRleHQ6IHN0cmluZywgb2JqOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMuaXNFbXB0eShvYmopKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgneycgKyBrZXkgKyAnfScsIG9ialtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIHN0YXRpYyB1bmZsYXR0ZW4oX2pzb246IGFueSkge1xuICAgICAgICBmdW5jdGlvbiBqc29uVG9PYmooZGF0YTogYW55LCByZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKGFjYywgY3VycmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmxpbmVLZXlzID0gY3VycmVudC5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdFByb3AgPSBpbmxpbmVLZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzUHJvcHMgPSBpbmxpbmVLZXlzLmxlbmd0aCA+PSAxO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRLZXkgPSBwYXJzZUludChpbmxpbmVLZXlzWzBdLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTmV4dEtleU51bWJlciA9ICFpc05hTihwYXJzZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX25leHREYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjW2ZpcnN0UHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY1tmaXJzdFByb3BdID0gaXNOZXh0S2V5TnVtYmVyID8gW10gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOZXh0S2V5TnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaW5kZXggPSBwYXJzZUludChpbmxpbmVLZXlzLnNoaWZ0KCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsdWVJbkFycmF5ID0gYWNjW2ZpcnN0UHJvcF0ubGVuZ3RoIC0gMSA+PSBfaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVPYmogPSBhY2NbZmlyc3RQcm9wXVtfaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX25leHREYXRhW2lubGluZUtleXMuam9pbignLicpXSA9IGRhdGFbY3VycmVudF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NbZmlyc3RQcm9wXVtfaW5kZXhdID0gaXNWYWx1ZUluQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oY3VycmVudFZhbHVlT2JqLCBqc29uVG9PYmooX25leHREYXRhLCBjdXJyZW50VmFsdWVPYmopKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoganNvblRvT2JqKF9uZXh0RGF0YSwge30pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX25leHREYXRhW2lubGluZUtleXMuam9pbignLicpXSA9IGRhdGFbY3VycmVudF07XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGFjY1tmaXJzdFByb3BdLCBqc29uVG9PYmooX25leHREYXRhLCBhY2NbZmlyc3RQcm9wXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2ZpcnN0UHJvcF0gPSBkYXRhW2N1cnJlbnRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvblRvT2JqKF9qc29uLCB7fSk7XG4gICAgfTtcbn1cbiJdfQ==