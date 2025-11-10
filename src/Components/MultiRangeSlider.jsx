import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const MultiRangeSlider = ({
  min,
  max,
  onChange,
  className
}) => {
  const [minVal, set_minVal] = useState(min);
  const [maxVal, set_maxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

    return (
        <div className={className || "multirange_slider"}>
            <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            set_minVal(value);
            event.target.value = value.toString();
            }}
            className={classnames("multirange_thumb multirange_thumb--zindex-3", {
            "multirange_thumb--zindex-5": minVal > max - 100,
            })}
            />
            <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            set_maxVal(value);
            event.target.value = value.toString();
            }}
            className="multirange_thumb multirange_thumb--zindex-4"
            />

            <div className="multirange_slider_wrapper">
                <div className="multirange_slider__track"></div>
                <div ref={range} className="multirange_slider__range"></div>
            </div>
            <div className="slider_value_wrapper">
                <div className="multirange_slider__left-value">Min: {minVal}$</div>
                -
                <div className="multirange_slider__right-value">Max: {maxVal}$</div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default MultiRangeSlider;
