import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useMemo, FC } from 'react';
import { imageData } from '@utils/dummyData';
import Autoscroll from '@homielab/react-native-auto-scroll';
import { screenWidth } from '@utils/Scaling';

const ProductSlider = () => {
    const rows = useMemo(() => {
        const result = [];
        for (let i = 0; i < imageData.length; i += 4) {
            result.push(imageData.slice(i, i + 4));
        }
        return result;
    }, [imageData]);

    return (
        <View>
            <Autoscroll>
                <View>
                    {rows?.map((row: any, rowIndex: number) => (
                        <MemoizedRow key={rowIndex} row={row} rowIndex={rowIndex} />
                    ))}
                </View>
            </Autoscroll>
        </View>
    );
};

const Row: FC<{ row: typeof imageData; rowIndex: number }> = ({ row, rowIndex }) => {
    return (
        <View>
            {row.map((image, imageIndex) => (
                <View key={imageIndex} style={[styles.itemContainer]}>
                    <Image source={image} style={styles.image} />
                </View>
            ))}
        </View>
    );
};

const MemoizedRow = React.memo(Row);

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 12,
        marginHorizontal: 10,
        width: screenWidth * 0.26,
        height: screenWidth * 0.26,
        backgroundColor: '#e9f7f8',
        justifyContent: 'center',
        borderRadius: 25,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default ProductSlider;
